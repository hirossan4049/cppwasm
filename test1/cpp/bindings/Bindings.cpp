#include <string>

#include <emscripten.h>
#include <emscripten/bind.h>
#include "HelloWorld.h"

// using namespace std;
using namespace emscripten;

EMSCRIPTEN_BINDINGS(HelloWorld) {
    function("hello", optional_override([](std::string name) -> std::string {
        return "hello, world " + name;
    }));
}
