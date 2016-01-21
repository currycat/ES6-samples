import Greeter from './greeter';
import ConsoleOutputStream from './console-output-stream';
const consoleOutputStream = ConsoleOutputStream();

const greeter = Greeter(consoleOutputStream);
greeter.message = 'Salutations Earth.';
greeter.greet(); // prints Salutations Earth.

const pepe = Greeter(consoleOutputStream);
pepe.message = 'fistro';
pepe.greet();
