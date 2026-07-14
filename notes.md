
Add trusted domains on the nextcloud thing.

docker exec -it <nextcloud_container> bash

php occ config:system:set trusted_domains 1 --value=localhost
php occ config:system:set trusted_domains 2 --value=yourdomain.com



fix reverse proxy issues

php occ config:system:set overwrite.cli.url --value="https://yourdomain.com/cloud"
php occ config:system:set overwriteprotocol --value="https"




export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Photographer Portfolio</h1>
      <p>Welcome to my work.</p>

      <a href="/cloud" style={{ color: "blue" }}>
        Client Delivery Portal
      </a>
    </main>
  );
}