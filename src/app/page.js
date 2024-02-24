import Image from "next/image";
export default function Home() {
    return (
        <div className="h-full sm:flex sm:items-center sm:justify-center sm:bg-rose-white ">
            <div className="w-full sm:w-[60%] md:w-[40%] lg:w-[25%] sm:my-20 bg-white sm:rounded-2xl p-5">
                <Image className="rounded-lg" src="/Images/omelette.jpeg" alt="omelette" height={600} width={1312} />
                <div className="m-5">
                    <h1 className="text-4xl font-young-serif text-dark-charcoal">Simple Omelette Recipe</h1>
                    <div className="my-5">
                        <p className=" text-wenge-brown font-outfit text-justify">
                            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled
                            with your choice of cheese, vegetables, or meats.
                        </p>
                        <div className="font-outfit text-wenge-brown mx-5 my-12">
                            <h5 className="font-semibold text-lg">Preparation Time</h5>
                            <ul className="list-disc list-outside px-5">
                                <li className="my-2">
                                    <span className="relative left-4">
                                        <span className="font-semibold">Total</span>: Approximately 10 minutes
                                    </span>
                                </li>
                                <li className="my-2">
                                    <span className="relative left-4">
                                        <span className="font-semibold">Preparation</span>: 5 minutes
                                    </span>
                                </li>
                                <li className="my-2">
                                    <span className="relative left-4">
                                        <span className="font-semibold">Cooking</span>: 5 minutes
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-wenge-brown border-b border-wenge-brown/50">
                        <h2 className="font-young-serif text-3xl">Ingredients</h2>
                        <ul className="font-outfit list-disc list-outside py-5 px-5">
                            <li className="my-2">
                                <span className="relative left-4">2-3 large eggs</span>
                            </li>
                            <li className="my-4">
                                <span className="relative left-4">Salt, to taste </span>
                            </li>
                            <li className="my-4">
                                <span className="relative left-4">Pepper, to taste</span>
                            </li>
                            <li className="my-4">
                                <span className="relative left-4">1 tablespoon of butter or oil</span>
                            </li>
                            <li className="my-4 ">
                                <span className="relative left-4">Optional fillings: cheese, diced vegetables, cooked meats, herbs</span>
                            </li>
                        </ul>
                    </div>
                    <div className="text-wenge-brown border-b border-wenge-brown/50 my-8">
                        <h2 className="font-young-serif text-3xl">Instructions</h2>
                        <ol className="list-decimal list-outside p-5 font-outfit text-wenge-brown">
                            <li className="my-2 font-semibold">
                                <span className="relative left-4 ">
                                    Beat the eggs
                                    <span className="font-normal">
                                        : In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water
                                        or milk for a fluffier texture.
                                    </span>
                                </span>
                            </li>
                            <li className="my-2 font-semibold">
                                <span className="relative left-4">
                                    Heat the pan<span className="font-normal">: Place a non-stick frying pan over medium heat and add butter or oil.</span>
                                </span>
                            </li>
                            <li className="my-2 font-semibold">
                                <span className="relative left-4">
                                    Cook the omelette
                                    <span className="font-normal">
                                        :Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                                    </span>
                                </span>
                            </li>
                            <li className="my-2 font-semibold">
                                <span className="relative left-4">
                                    Add fillings (optional)
                                    <span className="font-normal">
                                        : When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over
                                        one half of the omelette.
                                    </span>
                                </span>
                            </li>
                            <li className="my-2 font-semibold">
                                <span className="relative left-4 ">
                                    Fold and serve
                                    <span className="font-normal">
                                        :As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another
                                        minute, then slide it onto a plate.
                                    </span>
                                </span>
                            </li>
                            <li className="my-2 font-semibold">
                                <span className="relative left-4 ">
                                    Enjoy<span className="font-normal">:Serve hot, with additional salt and pepper if needed.</span>
                                </span>
                            </li>
                        </ol>
                    </div>
                    <div className="text-wenge-brown font-outfit">
                        <h2 className="font-young-serif text-3xl text-dark-charcoal">Nutrition</h2>
                        <p className="text-justify my-5">The table below shows nutritional values per serving without the additional fillings.</p>
                        <table className="w-full">
                            <tbody>
                                <tr className="border-b border-wenge-brown/50">
                                    <td className="px-4 py-2">Calories</td>
                                    <td className="px-4 py-2 text-dark-charcoal font-semibold">277kcal</td>
                                </tr>
                                <tr className="border-b border-wenge-brown/50 ">
                                    <td className="px-4 py-2">Carbs</td>
                                    <td className="px-4 py-2 text-dark-charcoal font-semibold">0g</td>
                                </tr>
                                <tr className="border-b border-wenge-brown/50 ">
                                    <td className="px-4 py-2">Protein</td>
                                    <td className="px-4 py-2 text-dark-charcoal font-semibold">20g</td>
                                </tr>
                                <tr className="border-b border-wenge-brown/50 ">
                                    <td className="px-4 py-2">Fat</td>
                                    <td className="px-4 py-2 text-dark-charcoal font-semibold">22g</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
