import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #6a876f;
  border-radius: 5px;
  border:none;
  padding: 20px;
  -webkit-box-shadow: 1px 2px 9px 5px rgba(252,252,252,0.57);
  -moz-box-shadow: 1px 2px 9px 5px rgba(252,252,252,0.57);
  box-shadow: 1px 2px 9px 5px rgba(252,252,252,0.57);
  text-align: center;
  
  p{
    font-size: 1rem;
    font-weight: 500;
    color:#fefefe;
  }
    `

type ButtonWrapperProps = {
    correct      : boolean;
    userClicked  : boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({correct, userClicked}) =>
            correct
                    ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
                    : !correct && userClicked
                            ? 'linear-gradient(90deg, #ff5656, #c16868)'
                            : 'linear-gradient(90deg, #a9a397, #eee)'};
    border: none;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #555;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }


`;