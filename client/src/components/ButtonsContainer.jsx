import CssStl from '../css-pocket/PageContainer'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useproductsContext } from '../pages/Allproducts';
import { useLocation, useNavigate } from 'react-router-dom';

const ButtonsContainer = () => {

    const { data: { page, pages } } = useproductsContext();
    
    const { search, pathname } = useLocation()
    const navigate = useNavigate()

    const handlePages = (pageNumber) => {

        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams}`);
    }

    const addButton = ({ pageNumber, activeClass }) => (
        <button className={`btn page-btn ${activeClass && 'active'}`}
        key={pageNumber}
        onClick={() => handlePages(pageNumber)}>{pageNumber}</button>
    );

    const buttonArray = () => {
        const buttons = [];
        buttons.push(addButton({ pageNumber: 1, activeClass: page === 1 }));
          if (page > 3) {
            buttons.push(<span className='page-btn dots' key='dots-1'>...</span>);
        }
        

        if (page !== 1 && page !== 2) {
            buttons.push(addButton({ pageNumber: page - 1, activeClass: false }));
        }

        
        if (page !== 1 && page !== pages) {
            buttons.push(addButton({ pageNumber: page , activeClass: true }));
        }

               if (page !== pages && page !== pages -1) {
            buttons.push(addButton({ pageNumber: page + 1, activeClass: false }));
        }
     if (page < pages -1 && page < pages -2) {
            buttons.push(<span className='page-btn dots' key='dots+1'>...</span>);
        }
        

        buttons.push(addButton({ pageNumber: pages, activeClass: page === pages }));

        return buttons;

    }



    return (
        <CssStl>
<button className='btn prev-btn' onClick={()=> {
    let prevButton = page -1;
    if(prevButton < 1) prevButton = pages;
    handlePages(prevButton)}}><HiChevronDoubleLeft />prev</button>

{ buttonArray()}

<button className='btn next-btn' onClick={()=> {
    let nextButton = page +1;
    if(nextButton > pages) nextButton = 1;
    handlePages(nextButton)}}>next <HiChevronDoubleRight/></button>
        </CssStl>
    )
}

    ;




export default ButtonsContainer;

