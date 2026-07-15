# Photographer website + Nextcloud

A single-VM deployment template with:

- Next.js at `/`
- Nextcloud at `/nextcloud/`
- Caddy as the HTTPS reverse proxy
- MariaDB, Redis, and a dedicated Nextcloud cron process

It runs unchanged on an ordinary Linux VM from AWS, Azure, Google Cloud, or a VPS provider.

## Requirements

- A Linux VM with Docker Engine and Docker Compose
- At least 2 vCPU and 4 GB RAM for a small production installation
- Ports 80 and 443 open
- A domain whose A/AAAA record points to the VM

## Run locally

```bash
cp .env.example .env
```

Replace all example passwords in `.env`, then run:

```bash
docker compose up --build -d
docker compose ps
```

Open `http://localhost` and `http://localhost/nextcloud/`. The first startup can take a few minutes while Nextcloud installs itself.

## Deploy with a domain

Set these values in `.env`:

```dotenv
SITE_ADDRESS=example.com
PUBLIC_URL=https://example.com
NEXTCLOUD_TRUSTED_DOMAINS=example.com
OVERWRITEPROTOCOL=https
```

Point the domain to the VM and run `docker compose up --build -d`. Caddy obtains and renews the TLS certificate automatically.

## Operations

Update deliberately rather than using floating `latest` tags:

```bash
docker compose pull
docker compose build --pull web
docker compose up -d
```

Before upgrading, back up all named volumes and create a consistent MariaDB dump. A real production backup must be copied to another machine or storage provider and periodically restore-tested. Never commit `.env`.

Useful commands:

```bash
docker compose logs -f proxy nextcloud
docker compose exec -u www-data nextcloud php occ status
docker compose exec -u www-data nextcloud php occ config:system:get overwritewebroot
```

## Architecture note

Serving Nextcloud below a path is more delicate than using `cloud.example.com`. This template configures Nextcloud's overwrite URL, protocol, host, web root, and trusted proxy settings. Test desktop/mobile sync and WebDAV after every major Nextcloud upgrade. If a future integration does not support the subpath, switching to a subdomain only requires proxy and environment changes; the stored data remains the same.
