package ejercicio4;

import java.util.Scanner; // Se importa Scanner

public class Ejercicio4 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in); // Se pasa System.in al Scanner

        // Turno del jugador 1
        System.out.println("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine().toLowerCase(); // Convertir a minúsculas para evitar problemas de comparación

        // Turno del jugador 2
        System.out.println("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = s.nextLine().toLowerCase(); // Se simplifica la lógica de esta parte

        // Verificar si es empate
        if (j1.equals(j2)) { // Se agrega equals y se corrige la llave
            System.out.println("Empate");
        } else {
            int g = 2; // Suponemos que gana el jugador 2 por defecto
            switch (j1) {
                case "piedra":
                    if (j2.equals("tijeras")) {
                        g = 1; // Si j1 es piedra y j2 es tijeras, gana j1
                    }
                    break;
                case "papel":
                    if (j2.equals("piedra")) {
                        g = 1; // Si j1 es papel y j2 es piedra, gana j1
                    }
                    break;
                case "tijeras":
                    if (j2.equals("papel")) {
                        g = 1; // Si j1 es tijeras y j2 es papel, gana j1
                    }
                    break;
                default:
                    System.out.println("Entrada inválida"); // Mensaje de entrada inválida
                    break;
            }
            // Anunciar el resultado si no hubo entrada inválida
            System.out.println("Gana el jugador " + g);
        }
        s.close(); // Cerrar el Scanner al final
    }
}