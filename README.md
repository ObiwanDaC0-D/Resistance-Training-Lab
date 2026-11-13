# Resistance Training Lab

An offline-friendly, static resistance-training journal focused on capability, energy, mobility and lifelong health rather than maximizing appearance or lifting numbers.

## Features
- Record sessions with date, name, duration, notes, energy and exercise sets
- Log weight, reps and perceived exertion (RPE)
- Dashboard with recent workouts and weekly movement-pattern coverage
- Per-exercise trends: top weight, volume load, reps, working sets and indicative estimated 1RM
- Rep-range distribution and session history
- Custom exercise library, weight unit conversion
- JSON backup/import and CSV export
- Browser-local IndexedDB persistence

## Deployment
The site is a single static `index.html`. In GitHub repository **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)**. Once published, visit https://obiwandac0-d.github.io/Resistance-Training-Lab/.

## Privacy and backups
Records are stored only in the current browser profile, not in GitHub. They do not automatically synchronize across devices. Export JSON backups regularly; importing a backup replaces local data.

## Training interpretation
Volume load is weight × reps, a descriptive metric rather than a universal measure of training quality. Estimated 1RM is an approximation based on sets up to 12 reps and should not be treated as a measured maximum. Movement coverage is descriptive, not a prescription for equal sets.

## Future development
A cardio companion app can use a compatible session format and a combined fitness dashboard. Cloud synchronization, advanced progression programming and recovery modeling are not part of V1.
