import { css } from "styled-components";

const primary = css`
  background-color: blue;
`;

const secondary = css`
  background-color: green;
`;

const terciary = css`
  background-color: red;
`;

const style = css`
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
