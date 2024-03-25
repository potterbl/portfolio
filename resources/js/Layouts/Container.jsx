import "../../css/Container.css"

const Container = ({children, backgroundImage}) => {

    return (
        <div className="container_wrapper">
            {
                backgroundImage &&
                <div
                    className="container_bg"
                    style={{backgroundImage: backgroundImage ? `url("${backgroundImage}")` : 'unset'}}
                />
            }
            <div
                className="container"
            >
                {children}
            </div>
        </div>
    );
};

export default Container;
