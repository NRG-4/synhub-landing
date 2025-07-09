
export default function VideosSection() {
    return (
        <section className={`py-12 md:py-20`} id={`videos`}>
            <div className={`container-x mx-auto space-y-6`}>
                <div className={`text-center`}>
                    <h2 className={`text-3xl md:text-4xl font-bold mb-6`}>
                        Our Project in Action
                    </h2>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/KN1QQ9w2WaI"
                            title="YouTube video player 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/CrKFM5N349o"
                            title="YouTube video player 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}