/* ========== EXTERNAL MODULES ========== */
import { parseISO, format } from "date-fns";

/* ========== INTERNAL MODULES ========== */


/* ========== EXPORTS ========== */
export default function Date({ dateString }) {

  /* --- STATE HOOKS --- */
  const date = parseISO(dateString);
  /* --- LIFECYCLE METHODS --- */
  /* --- EVENT HANDLERS --- */
  /* --- RENDER METHODS --- */

  /* --- RENDERER --- */
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

/* ========== STYLES ========== */