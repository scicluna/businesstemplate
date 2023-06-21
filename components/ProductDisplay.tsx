

export default function ProductDisplay() {
    return (
        <div className="grid md:grid-cols-3 grid-rows-3 w-full gap-4 p-2">
            <div className="flex justify-center items-center h-72 rounded-lg bg-red-500">Product 1</div>
            <div className="flex justify-center items-center h-72 rounded-lg bg-red-500">Product 2</div>
            <div className="flex justify-center items-center h-72 rounded-lg bg-red-500">Product 3</div>
        </div>
    )
}