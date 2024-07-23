function Project({image, name, date, info}){

    return <div className="flex flex-col sm:flex-row gap-8  sm:mx-20">
        <img className="sm:w-[250px]  rounded" src={image} />
        <div>
            <h1 className="text-[#21243D] my-3 font-bold text-[25px] sm:text-[30px]">{name}</h1>
            <span className="bg-[#21243D]  text-white px-5 rounded-full py-1">{date}</span>
            <p className="sm:text-1xl mt-4">{info}</p>
        </div>
    </div>
}

export default Project