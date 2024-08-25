import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ItemTest {
  title: string;
  content: string;
  path?: string;
}

export const CardTest = ({ title, content, path }: ItemTest) => {
  const navigate = useNavigate();
  const onClick = () => {
    if (path) {
      return navigate(path);
    }
  };
  return (
    <div className="card " onClick={onClick}>
      <div className="card-title">{title}</div>
      <div className="card-body">{content}</div>
    </div>
  );
};

export interface CardLayoutProps {
  children: ReactNode;
  title?: string;
  onClick?: () => void;
}

export const CardLayout = ({ children, title, onClick }: CardLayoutProps) => {
  return (
    <div className="card-layout relative" onClick={onClick}>
      {children}
      {title && <div className="button-position absolute -bottom-2">{title}</div>}
    </div>
  );
};
