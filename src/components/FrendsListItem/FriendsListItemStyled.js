import styled from "styled-components";

export const Item = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  width: 200px;
  position: relative;
  display: flex;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const setColorLine = props => {
  return props.statLine ? 'green' : 'red';
};

export const Status = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 13px;
  transform: translate(0, -50%);
  border-radius: 50%;
  background-color: ${setColorLine};
`;

export const Thumb = styled.div`
  margin-left: 30px;
  padding: 5px;
  overflow: hidden;
  border: 2px solid grey;
  border-radius: 20px;
`;

export const Avatar = styled.img``;

export const NameUser = styled.p`
  margin-left: 20px;
`;