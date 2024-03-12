import styled from "styled-components";

import { secondaryColor, LargeFontSize } from "./style/variables";

// 基本使用
export const AppWrapper = styled.div`
  .footer {
    position: fixed;
    width: 40%;
    text-align: center;
    font-size: ${LargeFontSize}px;
    font-weight: bold;
    color: ${secondaryColor};
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid purple;
  }
`;

// 子元素单独抽取到一个样式组件
export const SectionWrapper = styled.div`
  border: 1px solid red;

  .title {
    text-align: center;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size}px;

    &:hover {
      background: pink;
    }
  }

  .content {
    font-size: 20px;
    color: springgreen;
  }
`;
