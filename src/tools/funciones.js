import jwt from "jsonwebtoken";

export function generarToken(payload) {
  return new Promise((resolver, rechazar) => {
    jwt.sign(payload, "llave secreta", { expiresIn: "20m" }, (error, token) => {
      if (error) {
        rechazar({ error });
      } else {
        resolver({ token });
      }
    });
  });
}

export function verificarToken(token) {
  return new Promise((resolver, rechazar) => {
    jwt.verify(token, "llave secreta", (error, decodificado) => {
      if (error) {
        rechazar({ error });
      } else {
        resolver({ decodificado });
      }
    });
  });
}
