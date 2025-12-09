import styled from 'styled-components';

const CssSTL = styled.section`
wddth : 100%;
 margin : 0 auto;
  margin-top: 1.3rem;
   margin-bottom: 1.3rem;
  display: flex;
  align-items: center;
  gap: .3rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    display: flex;
    align-items : center;
    justify-content : center;
    padding : 0.3rem 0.5rem;
    background: transparent;
    border-color: transparent;
    font-weight: 600;
    font-size: clamp(0.875rem, 1.5vw, 1.5rem);
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor:pointer:
  }
  .active{
    background:var(--primary-500);
        color: var(--white);

  }
  .prev-btn,.next-btn{
    background: var(--background-secondary-color);
    border-color: transparent;
  border-radius: var(--border-radius);
 color: var(--primary-500);
  padding : .3rem .5rem;
  font-size: clamp(0.875rem, 1.5vw, 1.5rem);
text-transform:capitalize;
letter-spacing:.3rem;
display:flex;
align-items:center;
justify-content:center;
gap:0.2rem;
cursor:pointer;
  }
  .prev-btn:hover,.next-btn:hover{
    background:var(--primary-500);
        color: var(--white);
        transition:var(--transition);
  }
.dots{
  display:grid;
  place-items:center;
  cursor:text;
}
`;
export default CssSTL;
