{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
    (pkgs.nodePackages.pnpm.override { version = "8.3.0"; })
  ];
}