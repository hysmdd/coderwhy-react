import { styled } from "styled-components";

const commonButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  font-size: 18px;
  margin: 20px;
  color: #fff;
  border: none;
`;

export const PrimaryButton = styled(commonButton)`
  background: skyblue;
`;

export const Button1 = styled(commonButton)`
  background: #ff6700;
`;

export const DangerButton = styled(commonButton)`
  background: #f20;
`;

export const HomeWrapper = styled.div`
  border: 3px dashed;
  .top {
    .banner {
      width: 40%;
      height: 25vh;
      background: #e3e3e3;
    }
  }
  .bottom {
    width: 40%;
    border: 1px solid;
    .header {
      text-align: center;
      font-size: ${(props) => props.theme.size};
      color: ${(props) => props.theme.color};
    }
    .actor-list {
      list-style: none;

      .actor {
        font-size: 24px;
        line-height: 2em;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
