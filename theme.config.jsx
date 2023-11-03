export default {
  footer: <p>@khazakdk on Discord, <a href="https://twitter.com/Khazakdk" rel="author" target="_blank">@Khazakdk</a></p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  )
}