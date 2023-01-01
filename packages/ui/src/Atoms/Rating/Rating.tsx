import Styles from './Rating.module.scss'
import * as React from "react";

export interface RatingProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {

    name?: string;
    value ?: number;
    readonly ?: boolean;
    onChange ?: (newRating: number) => void;
}

export const Rating = ({
        name = `rating`,
        value = 0,
        readonly = false,
        onChange = undefined,
        className,
        ...props
    } : RatingProps) => {
    const [position, setPosition] = React.useState(value);

    React.useEffect(() => onChange && onChange(position), [position]);

    return (
        <div className={Styles.Rating} {...props}>
            {!readonly && (
                <div className={Styles.RatingInteractive}>
                    {Array.from(Array(5).keys()).map((index) => (
                    <React.Fragment key={`rating-${index +1}`}>
                        <input
                        onChange={(event: React.FormEvent<HTMLInputElement>) =>
                        setPosition(parseInt(event.currentTarget.value))
                        }
                        type={"radio"}
                        name={name}
                        id={`${name}-${index + 1}`}
                        value={index+1}
                        aria-label={`${index+1} star out of 5`}
                        checked={Math.floor(position) == index + 1}
                        />
                        <label htmlFor={`${name}-${index+1}`}/>
                    </React.Fragment>
                    ))}
                </div>
            )}
            {readonly && (
                <React.Fragment>
                    {Array.from(Array(5).keys()).map((index) => (
                        <span key={`rating-readonly-${index + 1}`}
                        className={
                            index <= position && position - index >= 0.5 ?
                                position - index < 1 && position - index >= 0.5 ?
                                    Styles.RatingStarHalfFill :
                                    Styles.RatingStarFill :
                                Styles.RatingStarLine
                            }
                            role="presentation"
                        />
                    ))};
                </React.Fragment>
            )};
        </div>
    )
};

const MemoRating = React.memo(Rating);

MemoRating.displayName = 'Rating';

export default MemoRating;