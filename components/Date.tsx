/* ========== EXTERNAL MODULES ========== */
import { parseISO, format } from "date-fns";


/* ========== EXPORTS ========== */
export default function Date({ dateString }: { dateString: string }) {

  /* --- STATE HOOKS --- */
  const date = parseISO(dateString);

  /* --- RENDERER --- */
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}