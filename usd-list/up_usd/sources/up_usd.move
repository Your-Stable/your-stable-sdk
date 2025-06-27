module up_usd::up_usd;

use sui::coin;

public struct UP_USD has drop {}

fun init(otw: UP_USD, ctx: &mut TxContext) {
    let (cap, metadata) = coin::create_currency(
        otw,
        6,
        b"upUSD",
        b"DoubleUp USD",
        b"Play games with upUSD in www.doubleup.fun",
        option::some(sui::url::new_unsafe_from_bytes(b"https://www.doubleup.fun/Diamond_Only.png")),
        ctx,
    );
    transfer::public_transfer(cap, ctx.sender());
    transfer::public_share_object(metadata);
}
