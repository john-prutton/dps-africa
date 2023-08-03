export default function PaletteChecker() {
  return (
    <>
      <div className="text-center py-12 bg-background text-foreground">
        background
      </div>
      <div className="text-center py-12 bg-primary text-primary-foreground">
        primary
      </div>
      <div className="text-center py-12 bg-secondary text-secondary-foreground">
        secondary
      </div>
      <div className="text-center py-12 bg-destructive text-destructive-foreground">
        destructive
      </div>
      <div className="text-center py-12 bg-muted text-muted-foreground">
        muted
      </div>
      <div className="text-center py-12 bg-accent text-accent-foreground">
        accent
      </div>
      <div className="text-center py-12 bg-popover text-popover-foreground">
        popover
      </div>
      <div className="text-center py-12 bg-card text-card-foreground">card</div>
    </>
  )
}
