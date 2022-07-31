import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 2px solid var(--color-border);
  border-radius: 5px;
  margin: 10px;
`;

export const InternalContainer = styled.div`
  width: calc(100% - 80px);
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
  padding: 5px 40px;
`;

export const CommentContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const CommentItem = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 80%;
  height: auto;
  background-color: #eeeeee;
  margin-top: 10px;
  padding: 10px 15px;
  position: relative;
  word-break: break-word;
  border-radius: 999px;
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: end;
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const Writer = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #999999;
`;

export const DateText = styled.span`
  margin-left: 3px;
  font-size: 0.4rem;
  font-style: italic;
  font-weight: 300;
  color: #999999;
`;

export const InputContainer = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
`;

export const Input = styled.textarea.attrs({
    rows: 4,
    maxLength: 250,
})`
  width: calc(100% - 58px);
  height: 52px;
  resize: none;
  font-family: 'Roboto';
  border: none;
  border-top: 2px solid var(--color-border);
  border-right: 2px solid var(--color-border);
  margin-bottom: 2px;
  outline: none;
`;

export const Enter = styled.button`
  width: 60px;
  height: 60px;
  background-color: var(--color-primary);
  color: #fff;
  border: 3px solid var(--background-color);
  border-radius: 5px;

  &:hover {
    filter: brightness(0.98);
  }
`;
