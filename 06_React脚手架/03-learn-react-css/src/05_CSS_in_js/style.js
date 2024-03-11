import styled from "styled-components";

export const AppWrapper = styled.div`
  .section {
    border: 1px solid red;

    .title {
      text-align: center;
      color: #ff6700;

      &:hover {
        background: pink;
      }
    }

    .content {
      font-size: 20px;
      color: springgreen;
    }
  }
  .footer {
    position: fixed;
    width: 40%;
    text-align: center;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid purple;
  }
`;
