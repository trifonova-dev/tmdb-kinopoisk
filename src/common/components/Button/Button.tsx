import type { ReactNode } from "react"
import styles from "./Button.module.css"

export type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "icon"
}
export const Button = ({
  children,
  disabled,
  type = "button",
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  )
}
