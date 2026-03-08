export default function VisionCard({ icon, subtitle, description }) {
    return (
        <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)]">
            <div className="mb-6 flex justify-center text-primary">
                {icon}
            </div>
            <h3 className="text-center text-lg font-semibold tracking-tight text-foreground">
                {subtitle}
            </h3>
            <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                {description}
            </p>
        </div>
    );
}
