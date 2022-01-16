#include <emscripten.h>
#include <emscripten/bind.h>
#include "Draw.h"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(Draw) {
    function("render", optional_override([](const std::string &id) {
        Draw::render(id);
    }));
}