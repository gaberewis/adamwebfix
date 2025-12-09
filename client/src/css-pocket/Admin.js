import styled from 'styled-components';

const CssStl = styled.section`

width : 90%;
margin : 1rem auto;
display: grid;
gap : 1rem;

@media(min-width : 992px){
grid-template-columns : 1fr 1fr 1fr;
}
  .stat-container {
    background: var(--background-secondary-color);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #666;
 
  }
   .count {
    display: block;
    font-weight: 600;
    color: #647acb;
    line-height: 2;
  }

 .icon {
    width: 70px;
    height: 60px;
    background: #e0e8f9;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      
      color: #647acb;
    }
  }
    .a-title{
    color : #647acb; 
    font-weight : 500}

`;
export default CssStl;


