import "../../css/QuoteBlock.css"

const QuoteBlock = () => {
    return (
        <div className="quote-block">
            <div className="quote-block_top">
                <span className="quote_left px64 bold">"</span>
                <span className="quote_right px64 bold">"</span>
                <h2 className="px24">With great power comes great electricity bill</h2>
            </div>
            <div className="quote-block_bottom">
                <h3 className="px24 normal">- Dr. Who</h3>
            </div>
        </div>
    );
};

export default QuoteBlock;
