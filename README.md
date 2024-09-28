# nseimu.github.io

## Tailwind CSS

### Installation

```shell
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
chmod +x tailwindcss-macos-arm64
mv tailwindcss-macos-arm64 tailwindcss
```

### Creating WebP Images with the Command Line

```shell
cwebp -q 50 images/flower1.jpg -o images/flower1.webp
```

### Start the Tailwind CLI build process

```shell
./tailwindcss -i input.css -o index.css --minify
```

## Static HTTP server

```shell
npm install -g http-server
http-server
```
