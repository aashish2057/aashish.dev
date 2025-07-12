{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    systems.url = "github:nix-systems/default";
  };

  outputs = {
    nixpkgs,
    self,
    ...
  } @ inputs: let
    inherit (nixpkgs) legacyPackages lib;

    systems = import inputs.systems;
    forEachSystem = lib.genAttrs systems;
    pkgsForEach = legacyPackages;
  in {
    devShells = forEachSystem (system: let
      pkgs = pkgsForEach.${system};
    in {
      default = pkgs.mkShell {
        packages = with pkgs; [bun];
      };
    });

    checks = self.devShells;
  };
}
