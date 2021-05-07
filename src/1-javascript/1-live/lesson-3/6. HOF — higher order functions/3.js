/**
 * Данная функция также является функцией высшего порядка,
 * так как принимает другую функцию в качестве параметра.
 */

// HOF
function repeat(times, action) {
    for (let i = 0; i < times; i++) {
        action(i);
    }
}

repeat(3, console.log);
