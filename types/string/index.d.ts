import { BASE_64_DEFAULT_ALPHABET } from "./fns/base64";
import { BASE_64_DEFAULT_PAD } from "./fns/base64";
import { codePointFromBinaryString } from "./fns/base64";
import { decode } from "./fns/base64";
import { encode } from "./fns/base64";
import { tokenize } from "./fns/base64";
import { URL_SAFE_BASE_64_ALPHABET } from "./fns/base64";
import { fromAscii } from "./fns/hex";
import { fromHex } from "./fns/ascii";
export namespace base64 {
    export { BASE_64_DEFAULT_ALPHABET };
    export { BASE_64_DEFAULT_PAD };
    export { codePointFromBinaryString };
    export { decode };
    export { encode };
    export { tokenize };
    export { URL_SAFE_BASE_64_ALPHABET };
}
export namespace hex {
    export { fromAscii };
}
export namespace ascii {
    export { fromHex };
}
