import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(var(--header-height) + var(--header-margin));
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: var(--header-border) solid var(--color-primary);
`;

export const Content = styled.div`
  width: var(--screen-max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: var(--header-height);
`;

export const Logout = styled.img`
  height: calc(var(--header-height) - 5px);
  cursor: pointer;
`;