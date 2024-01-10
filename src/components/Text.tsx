export interface TextProps {
    size: number,
    color: string,
    alignment: 'left' | 'right' | 'center',
    className: string
}

export function Text({ props, children }: {props: TextProps, children: React.ReactNode}) {
    let size: string = '0px';
    switch (props.size) {
        case 1: size = '50px'; break;
        case 2: size = '30px'; break;
        case 3: size = '20px'; break;
        case 4: size = '15px'; break;
        case 6: size = '8px'; break;
    }

    return (
        <p className={props.className} style={{color: props.color, fontSize: size, textAlign: props.alignment}}>{children}</p>
    )
}