import { ReactElement, ReactNode } from 'react';

type ContainerProps = {
    children: ReactElement;
}

export function Container ({children}: ContainerProps): ReactElement {
    return (
        <div className="container">
            {children}
        </div>
    )
}