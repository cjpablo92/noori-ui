export interface ButtonProps {
    /**
     * Set the Button ID. Should be unique
     */
    id: string
    /**
     * Set the onClick function
     */
    onClick?: (event: Event) => void
    /**
     * Set the disable state for the button
     */
    disabled?: boolean
  }
  