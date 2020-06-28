<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html>
        <body>
            <xsl:for-each select="directors/director">
                <h2><xsl:value-of select="name"/></h2>
                <h2><xsl:value-of select="position"/></h2>
                <h3><xsl:value-of select="age"/>, <xsl:value-of select="location"/>, <xsl:value-of select="pronouns"/></h3>
                <p><xsl:value-of select="bio"/></p>
            </xsl:for-each>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>