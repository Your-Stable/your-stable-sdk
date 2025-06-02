module jusd::jusd {
    use sui::{coin, url};

    public struct JUSD has drop {}

    fun init(witness: JUSD, ctx: &mut TxContext) {
        let (treasury, meta) = coin::create_currency(
            witness,
            // Please note that decimal has to be 9
            9,
            b"JUSD",
            b"J-Collective Universal Stable Coin",
            b"For every members in J-community - JUSD is your gateway to financial empowerment in the Sui ecosystem",
            option::some(
                url::new_unsafe_from_bytes(
                    b"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBPdXRlciBjaXJjbGUgLS0+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI5NSIgZmlsbD0iYmxhY2siIHN0cm9rZT0ibm9uZSIvPgogIAogIDwhLS0gSW5uZXIgY2lyY2xlIC0tPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODAiIGZpbGw9IndoaXRlIiBzdHJva2U9Im5vbmUiLz4KICA8IS0tIExhcmdlICJKIiBpbiB0aGUgY2VudGVyIC0tPgogIDx0ZXh0IHg9IjEwMCIgeT0iMTMwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iODYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIAogICAgICAgIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIj5KPC90ZXh0PgogIAogIDwhLS0gIlVTRCIgdGV4dCBiZWxvdyB0aGUgSiAtLT4KICA8dGV4dCB4PSIxMDAiIHk9IjE1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSIzMDAiIAogICAgICAgIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIiBvcGFjaXR5PSIwLjciPlVTRDwvdGV4dD4KICA8IS0tIFNpbXBsZSBib3JkZXIgcmluZyAtLT4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9Ijg3IiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=",
                ),
            ),
            ctx,
        );
        transfer::public_share_object(meta);
        transfer::public_transfer(treasury, ctx.sender());
    }
}
