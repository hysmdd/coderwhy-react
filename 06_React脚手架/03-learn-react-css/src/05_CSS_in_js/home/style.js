import { styled } from "styled-components";

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
