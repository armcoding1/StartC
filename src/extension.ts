import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.workspace.onDidChangeTextDocument((event) => {
        const document = event.document;

        if (document.languageId === "c") {
            const text = document.getText().trim();

            if (text === "io") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n#include <ctype.h>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "arr") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n#include <ctype.h>\n#include <math.h>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "mem") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n#include <ctype.h>\n#include <memory.h>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "str") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n#include <ctype.h>\n#include <memory.h>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "algo") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <math.h>\n#include <ctype.h>\n#include <stddef.h>\n#include <memory.h>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "math") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <math.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n#include <ctype.h>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "file") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n#include <ctype.h>\n#include <unistd.h>\n#include <fcntl.h>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "ptr") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n#include <ctype.h>\n#include <memory.h>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "time") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n#include <time.h>\n#include <unistd.h>\n\nint main() {\n    return 0;\n}\n");
            } else if (text === "cont") {
                insertBoilerplate(document, "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <stddef.h>\n#include <ctype.h>\n#include <memory.h>\n#include <unistd.h>\n#include <fcntl.h>\n\nint main() {\n    return 0;\n}\n");
            }
        }
    });

    context.subscriptions.push(disposable);
}

async function insertBoilerplate(document: vscode.TextDocument, boilerplate: string) {
    const edit = new vscode.WorkspaceEdit();
    const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(document.getText().length)
    );

    edit.replace(document.uri, fullRange, boilerplate);
    await vscode.workspace.applyEdit(edit);
}

export function deactivate() { }
