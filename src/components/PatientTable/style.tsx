import styled, { css } from "styled-components";

import React, { Dispatch, PropsWithChildren } from "react";

export const PatientAside = ({
  click,
  children,
  setClick,
}: PropsWithChildren<{
  click?: boolean;
  setClick: Dispatch<React.SetStateAction<boolean>>;
}>) => {
  return (
    <PatientAsideContainer click={click}>
      {click ? (
        children
      ) : (
        <button onClick={() => setClick(true)}>필터 모달 활성화</button>
      )}
    </PatientAsideContainer>
  );
};

export default PatientAside;

export const PatientAsideContainer = styled.div<{ click?: boolean }>`
  ${({ click }) => (click ? clickAsdie : notClickAside)}
`;

const clickAsdie = css``;
const notClickAside = css`
  position: fixed;
  top: 5%;
  right: 0;
`;
