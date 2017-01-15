export default function(url: string) {
    const regex = /\/schema\/([\w-]+)\/([\w\.]+)\.json$/g;
    const [library, version] = regex.exec(url).slice(1,3);
    return {library, version};
}
