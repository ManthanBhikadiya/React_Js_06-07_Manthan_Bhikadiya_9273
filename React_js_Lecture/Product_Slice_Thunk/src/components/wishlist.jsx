import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

const Wishlist = () => {
    const wishlistData = useSelector((state) => state.wishlist.wishlist);
    const dispatch = useDispatch();

    const handleMoveToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(removeFromWishlist(product.id));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8 border-b border-default pb-4">
                <h1 className="text-2xl font-semibold text-heading">
                    Wishlist ({wishlistData.length})
                </h1>

                {wishlistData.length > 0 && (
                    <button
                        onClick={() => dispatch(clearWishlist())}
                        className="inline-flex items-center bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium text-fg-danger shadow-xs font-medium rounded-base text-sm px-4 py-2"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {wishlistData.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-neutral-primary-soft border border-default rounded-base shadow-xs">
                    <p className="text-body text-lg">empty wishlist.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {wishlistData.map((p) => (
                        <div
                            key={p.id}
                            className="bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs flex flex-col justify-between"
                        >
                            <div className="mb-6 flex justify-center">
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="h-40 object-contain rounded-base"
                                />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-heading truncate">
                                    {p.name}
                                </h3>
                                <p className="text-2xl font-extrabold text-heading">
                                    ${p.price}
                                </p>

                                <div className="flex flex-col gap-2 pt-4">
                                    

                                    <button
                                        onClick={() => dispatch(removeFromWishlist(p.id))}
                                        className="w-full inline-flex justify-center items-center bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium text-fg-danger shadow-xs font-medium rounded-base text-sm px-4 py-2.5 transition-all"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;