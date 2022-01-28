import { css } from "styled-components";

const primary = css`
  color: white;
  background-color: #1ea7fd;
`;

const secondary = css`
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

const terciary = css`
  background-color: red;
`;

const style = css`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  .primary {
    ${primary}
  }
  .secondary {
    ${secondary}
  }
  .terciary {
    ${terciary}
  }
  font-weight: normal;
`;

export default style;
