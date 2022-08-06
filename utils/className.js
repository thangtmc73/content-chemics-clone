export default function className(...args) {
  return args.filter(Boolean).join(" ");
}
