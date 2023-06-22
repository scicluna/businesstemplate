import { fakeNews } from "@/utils/fakenews"
import Link from "next/link"
//async component in practice -- fetching news from an api point

export default function News() {
    return (
        <div className="h-auto w-full items-center flex flex-col gap-4 p-2">
            {fakeNews.map((news) => (
                <Link href={`${news.link}`} className="w-full flex flex-col items-center">
                    <div className="flex h-20 md:w-1/2 w-full gap-4 border-b border-b-gray-400" key={news.headline}>
                        <p className="text-gray-400 text-sm">{news.created}</p>
                        <div className="flex flex-col justify-between text-sm">
                            <h3 className="font-bold">{news.headline}</h3>
                            <div className="flex gap-4">
                                {news.tags.map((tag) => (
                                    <p className="text-blue-400" key={news.headline + tag}>{tag}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

