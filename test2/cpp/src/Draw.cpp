#include "Draw.h"
#include <emscripten/html5.h>
#include <GLES3/gl3.h>

void Draw::render(const std::string &id) {
    EmscriptenWebGLContextAttributes attrs;
    attrs.explicitSwapControl = 0;
    attrs.depth = 1;
    attrs.stencil = 1;
    attrs.antialias = 1;
    attrs.majorVersion = 2;
    attrs.minorVersion = 0;

    EMSCRIPTEN_WEBGL_CONTEXT_HANDLE context = emscripten_webgl_create_context(id.c_str(), &attrs);
    if (context < 0) {
        printf("failed %d\n", context);
        return;
    }

    EMSCRIPTEN_RESULT r = emscripten_webgl_make_context_current(context);
    if (r < 0) {
        printf("failed %d\n", r);
        return;
    }

    glClearColor(1, 0, 0, 1);
    glClear(GL_COLOR_BUFFER_BIT);
}