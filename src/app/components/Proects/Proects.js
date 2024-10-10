import './_Proects_style.scss';
import Image from 'next/image';

const Proects = () => {

    const dataProjects = [
        {
            id: '1',
            title: 'Lazza Rosa',
            ref: 'card-img.jpeg'
        },
        {
            id: '2',
            title: 'Kaska Place',
            ref: 'card-img.jpeg'
        },
        {
            id: '3',
            title: 'Peace Palace',
            ref: 'card-img.jpeg'
        }
    ];

    return (
        <>
            <section className="projects__holder">
                <div className="projects__container">
                    <div className="projects__info">
                        <div className="projects__title-holder">
                            <h3 className="projects__title">
                                Проекти Поділля-Інвест Сіті
                            </h3>
                        </div>
                        <div className="projects__subtitle-holder">
                            <p className="projects__subtitle">
                                Кожен зроблений з особистим підходом із застосування новітніх рішень
                            </p>
                        </div>
                    </div>
                    <div className="projects__catalog-holder">
                        <div className="projects__catalog">
                        {dataProjects.map((item) => (
                            <div className="card" key={item.id}>
                                <div className="card__img-holder">
                                    <Image
                                        className="card__img"
                                        src={'/img/' + item.ref}
                                        width={512}
                                        height={771}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="card__title-holder">
                                    <div className="card__title">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Proects;
